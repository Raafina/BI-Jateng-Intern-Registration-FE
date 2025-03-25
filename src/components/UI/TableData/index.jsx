import { useMemo } from 'react';
import { cn } from '../../../utils/cn';
import {
  Input,
  Button,
  Spinner,
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
  Pagination,
} from '@heroui/react';
import { CiSearch } from 'react-icons/ci';
import PropTypes from 'prop-types';

const TableData = (props) => {
  const {
    columns,
    data,
    emptyContent,
    isLoading,
    renderCell,
    onClickButtonTopContent,
    buttonTopContentLabel,
    showSearch = true,
    totalPages,
    currentPage,
    onPageChange,
  } = props;

  const TopContent = useMemo(() => {
    return (
      <div className="flex flex-col-reverse items-start justify-between gap-y-4 lg:flex-row lg:items-center">
        {showSearch && (
          <Input
            placeholder="Search"
            isClearable
            className="w-full sm:max-w-[24%] font-sans"
            startContent={<CiSearch />}
            onClear={() => {}}
            onChange={() => {}}
          />
        )}

        {buttonTopContentLabel && (
          <Button
            color="primary"
            className="text-white font-sans"
            onPress={onClickButtonTopContent}>
            {buttonTopContentLabel}
          </Button>
        )}
      </div>
    );
  }, [buttonTopContentLabel, onClickButtonTopContent, showSearch]);

  const BottomContent = useMemo(() => {
    return (
      <div className="flex items-center justify-center lg:justify-between font-sans">
        {totalPages > 1 && (
          <Pagination
            isCompact
            showControls
            color="primary"
            page={currentPage}
            total={totalPages}
            onChange={onPageChange}
          />
        )}
      </div>
    );
  }, [currentPage, totalPages, onPageChange]);

  return (
    <Table
      topContent={TopContent}
      topContentPlacement="outside"
      bottomContent={BottomContent}
      bottomContentPlacement="outside"
      classNames={{
        base: 'max-w-full',
        wrapper: cn({ 'overflow-x-hidden': true }),
      }}>
      <TableHeader columns={columns}>
        {(column) => (
          <TableColumn key={column.uid} className="font-sans">
            {column.name}
          </TableColumn>
        )}
      </TableHeader>

      <TableBody
        emptyContent={emptyContent}
        isLoading={isLoading}
        items={data}
        loadingContent={
          <div className="flex h-full w-full items-center justify-center bg-foreground-700/30 backdrop-blur-sm">
            <Spinner color="primary" />
          </div>
        }>
        {(item) => (
          <TableRow key={item.id}>
            {(columnKey) => (
              <TableCell className="font-sans">
                {renderCell(item, columnKey)}
              </TableCell>
            )}
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
};

TableData.propTypes = {
  columns: PropTypes.arrayOf(
    PropTypes.shape({
      uid: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    })
  ).isRequired,
  data: PropTypes.array.isRequired,
  emptyContent: PropTypes.string,
  isLoading: PropTypes.bool,
  renderCell: PropTypes.func.isRequired,
  showSearch: PropTypes.bool,
  buttonTopContentLabel: PropTypes.string,
  onClickButtonTopContent: PropTypes.func,
  totalPages: PropTypes.number,
  currentPage: PropTypes.number,
  onPageChange: PropTypes.func,
};

export default TableData;

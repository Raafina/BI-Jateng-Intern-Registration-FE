import {
  Spinner,
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
} from '@heroui/react';
import { cn } from '../../../utils/cn';
import PropTypes from 'prop-types';

const TableData = (props) => {
  const { columns, data, emptyContent, isLoading, renderCell } = props;

  return (
    <Table
      classNames={{
        base: 'max-w-full',
        wrapper: cn({ 'overflow-x-hidden': true }),
      }}>
      <TableHeader columns={columns}>
        {(column) => <TableColumn key={column.uid}>{column.name}</TableColumn>}
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
              <TableCell>{renderCell(item, columnKey)}</TableCell>
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
};

export default TableData;

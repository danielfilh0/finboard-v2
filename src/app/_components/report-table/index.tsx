'use client'

import '@/assets/css/pagination.css'
import {
  Box,
  Flex,
  Spinner,
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from '@chakra-ui/react'
import { format } from 'date-fns'
import ReactPaginate from 'react-paginate'

import { TransactionWithStatus } from '@/data/types/all'
import { formatCurrency } from '@/data/utils/format-currency'

import { useReportTableController } from './use-report-table-controller'

interface ReportTableProps {
  tableHead: Array<string>
  data: Array<TransactionWithStatus>
  count: number
}

export function ReportTable({ data, count, tableHead }: ReportTableProps) {
  const { page, isLoading, totalPages, transactions, handlePageChange } =
    useReportTableController({ data, count })

  if (isLoading)
    return (
      <Flex justifyContent="center" alignItems="center" mt="10">
        <Spinner size="xl" />
      </Flex>
    )

  return (
    <Flex flexDirection="column" height="100%">
      <TableContainer flex={1} display="flex" flexDirection="column">
        <Table variant="">
          <Thead>
            <Tr>
              {tableHead.map((col) => (
                <Th key={col}>{col}</Th>
              ))}
            </Tr>
          </Thead>
          <Tbody>
            {transactions.map((item) => (
              <Tr key={item.date}>
                <Td>{format(new Date(item.date), 'dd/MM/yyyy')}</Td>
                <Td>{item.account}</Td>
                <Td>{item.industry}</Td>
                <Td>{item.state}</Td>
                <Td>{formatCurrency(item.amount)}</Td>
                <Td>{item.status === 'pay' ? 'PAGO' : 'PENDENTE'}</Td>
                <Td>
                  {item.transaction_type === 'deposit' ? 'Receita' : 'Despesa'}
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>

      <Box pb={4}>
        <ReactPaginate
          breakLabel="..."
          nextLabel=">"
          pageRangeDisplayed={5}
          pageCount={Math.ceil(totalPages / 10)}
          previousLabel="<"
          onPageChange={handlePageChange}
          forcePage={page}
          className="pagination"
        />
      </Box>
    </Flex>
  )
}

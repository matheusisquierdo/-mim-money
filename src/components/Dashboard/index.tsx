import { Container } from './styles';
import { Summary } from '../Summary';
import { TrasactionsTable } from '../TransactionsTable';
export function Dashboard() {
  return (
    <Container>
      <Summary />
      <TrasactionsTable />
    </Container>
  );
}

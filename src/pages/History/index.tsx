import { useCycles } from '../../contexts/CyclesContext';
import { formatDistanceToNow } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';

import * as S from './styles';
import { useEffect } from 'react';

export function History() {
  const { cycles } = useCycles();

  useEffect(() => {
    document.title = 'Histórico | Ignite Timer';
  }, []);

  return (
    <S.HistoryContainer>
      <h1>Meu histórico</h1>

      <S.HistoryList>
        <table>
          <thead>
            <tr>
              <th>Tarefa</th>
              <th>Duração</th>
              <th>Início</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {cycles.map(cycle => {
              return (
                <tr key={cycle.id}>
                  <td>{cycle.task}</td>
                  <td>{cycle.minutesAmount} minutos</td>
                  <td>
                    {formatDistanceToNow(new Date(cycle.startDate), {
                      addSuffix: true,
                      locale: ptBR,
                    })}
                  </td>
                  <td>
                    {cycle.finishDate ? (
                      <S.Status statusColor={'green'}>Concluído</S.Status>
                    ) : cycle.interruptionDate ? (
                      <S.Status statusColor={'red'}>Interrompido</S.Status>
                    ) : (
                      <S.Status statusColor={'yellow'}>Em andamento</S.Status>
                    )}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </S.HistoryList>
    </S.HistoryContainer>
  );
}

import moment from 'moment';
import 'moment/locale/pt-br';

const monthsTranslation: { [key: string]: string } = {
    January: 'Janeiro',
    February: 'Fevereiro',
    March: 'Março',
    April: 'Abril',
    May: 'Maio',
    June: 'Junho',
    July: 'Julho',
    August: 'Agosto',
    September: 'Setembro',
    October: 'Outubro',
    November: 'Novembro',
    December: 'Dezembro',
  };

export function formatDayDate(dateString: string) {

    const formattedDate = moment(dateString).format('DD [de] MMMM');
    const monthInEnglish = moment(dateString).format('MMMM');
    const translatedMonth = monthsTranslation[monthInEnglish];
    return formattedDate.replace(monthInEnglish, translatedMonth);
}

export function formatCurrency(value: number) {

    const sign = value >= 0 ? '+' : '-';

    const absoluteValue = Math.abs(value);

    const formattedValue = (absoluteValue / 100).toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL',
      minimumFractionDigits: 2,
    });
  
    return `${sign} ${formattedValue}`;
  }
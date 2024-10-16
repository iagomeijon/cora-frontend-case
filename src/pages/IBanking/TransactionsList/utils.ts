import moment from 'moment';
import 'moment/locale/pt-br';

import entryIcon from "../../../assets/svg/entry.svg";
import outIcon from "../../../assets/svg/out.svg";

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

export function formatDateTime(dateString: string) {

    const day = moment(dateString).format('DD');
    const monthInEnglish = moment(dateString).format('MMMM');
    const year = moment(dateString).format('YYYY');
    const time = moment(dateString).format('HH:mm');
  
   
    const translatedMonth = monthsTranslation[monthInEnglish];
    const abbreviatedMonth = translatedMonth.slice(0, 3);
  

    return `${day} ${abbreviatedMonth} ${year} - ${time}`;
  }

export function formatCurrency(value: number, entryType: string) {

    const sign = entryType === 'CREDIT' ? '+' : '-';

    const absoluteValue = Math.abs(value);

    const formattedValue = (absoluteValue / 100).toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL',
      minimumFractionDigits: 2,
    });
  
    return `${sign} ${formattedValue}`;
}

export function getIcon(entryType: string) {
    return entryType === 'CREDIT' ? entryIcon : outIcon;
}
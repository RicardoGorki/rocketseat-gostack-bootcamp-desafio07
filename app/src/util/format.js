import numeral from 'numeral';
import 'numeral/locales/pt-br';

export const formatPrice = value => {
  numeral.locale('pt-br');
  numeral(value).format('$0.0,00');
};

export default formatPrice;

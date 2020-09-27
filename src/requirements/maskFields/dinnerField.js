export default function dinnerMask(number) {
  return ((number.replace(/\D/g,'')) / 100).toFixed(2)
}

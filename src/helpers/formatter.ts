const getMonth: { [key: string]: string } = {
  janeiro: '01',
  fevereiro: '02',
  março: '03',
  abril: '04',
  maio: '05',
  junho: '06',
  julho: '07',
  agosto: '08',
  setembro: '09',
  outubro: '10',
  novembro: '11',
  dezembro: '12',
};

export function toDate(date: string) {
  const dateSplitted = date.split(' de ');
  const month = getMonth[dateSplitted[1].split(',')[0]];
  const year = dateSplitted[1].split(',')[1];

  return new Date(`${year}-${month}-${dateSplitted[0]}`);
}

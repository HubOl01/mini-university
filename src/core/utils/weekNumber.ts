/* import 'package:intl/intl.dart';

int weekNumber(DateTime date) {
  int dayOfYear = int.parse(DateFormat("D").format(date));
  int woy = ((dayOfYear - date.weekday + 10) / 7).floor();
  if (woy < 1) {
    woy = numOfWeeks(date.year - 1);
  } else if (woy > numOfWeeks(date.year)) {
    woy = 1;
  }
  // print("This week: ${woy}");
  return woy;
}

int numOfWeeks(int year) {
  DateTime dec28 = DateTime(year, 12, 28);
  int dayOfDec28 = int.parse(DateFormat("D").format(dec28));
  return ((dayOfDec28 - dec28.weekday + 10) / 7).floor();
} */

// export function weekNumber(date: Date): number {
//     const dayOfYear: number = parseInt(new Intl.DateTimeFormat('ru', { day: 'numeric' }).format(date));
//     let woy: number = Math.floor((dayOfYear - date.getDay() + 10) / 7);
//     if (woy < 1) {
//       woy = numOfWeeks(date.getFullYear() - 1);
//     } else if (woy > numOfWeeks(date.getFullYear())) {
//       woy = 1;
//     }
//     // console.log(`This week: ${woy}`);
//     return woy;
//   }
  
//   function numOfWeeks(year: number): number {
//     const dec28: Date = new Date(year, 11, 28); // Month in JavaScript Date starts from 0
//     const dayOfDec28: number = parseInt(new Intl.DateTimeFormat('ru', { day: 'numeric' }).format(dec28));
//     return Math.floor((dayOfDec28 - dec28.getDay() + 10) / 7);
//   }
  

export function getWeekNumber(date: Date): number {
  const startOfYear = new Date(date.getFullYear(), 0, 0);
  const diff = date.getTime() - startOfYear.getTime();
  const oneWeek = 7 * 24 * 60 * 60 * 1000;
  const weekNumber = Math.floor((diff / oneWeek) + 1);

  return weekNumber;
}

/* Zadanie 2
Stwórz funkcję o nazwie Weather, która będzie konstruktorem. Stwórz obiekt na bazie tego konstruktora, któremu przekaż tablicę z 3 pomiarami temperatury w ciągu dnia. Rozszerz konstruktor Weather o metodę getAvgTemperature (dodaj ją do prototypu), której celem jest zwrócenie średniej temperatury dnia. Wstaw tą wartość do elementu o id avg-temp.

Spróbuj posłużyć się jedną z metod (forEach, map lub reduce). */

function Weather(measurements) {
	this.measurements = measurements;
}

Weather.prototype.getAvgTemperature = function () {
	let sum = 0;
	for (let i = 0; i < this.measurements.length; i++) {
		sum += this.measurements[i];
	}
	return sum / this.measurements.length;
};

let myWeather = new Weather([15, 20, 17]);
let avgTempElement = document.querySelector("#avg-temp");
avgTempElement.innerText = Math.floor(myWeather.getAvgTemperature());

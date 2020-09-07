export function treatAsUTC(date) {
    var result = new Date(date);
    result.setMinutes(result.getMinutes() - result.getTimezoneOffset());
    return result;
}

export const millisecondsPerDay = 24 * 60 * 60 * 1000;
export function daysBetween(startDate, endDate) {
    return (treatAsUTC(endDate) - treatAsUTC(startDate)) / millisecondsPerDay;
}

export function dateAsInt(date){
    return parseInt(date / millisecondsPerDay);
}

export async function checkBackend(url){
	var response = await fetch(url);
	var data = await response.json();
	return data;
}

export function backendUrl(https, host, port){
	var scheme = https ? "https" : "http";
	return scheme + "://" + host + ":" + port;
}
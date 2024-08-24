function roundTime(seconds) {
    const roundMinutes = Math.floor(seconds / 60);

    let returnTextMin = "minuten";
    let returnTextSec = "seconden";

    if (roundMinutes === 1) {
        returnTextMin = 'minuut';
    }
    if (returnTextSec === 1) {
        returnTextSec = "second";
    }

    return ` ${roundMinutes} ${returnTextMin} en ${Math.round(seconds - roundMinutes * 60)} ${returnTextSec}`;

}

export default roundTime;
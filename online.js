/**
 * Online status
Display online status for a list of users.
Example:
- `onlineStatus(['mockIng99', 'J0eyPunch', 'glassedFer'])` should return `'mockIng99, J0eyPunch and 1 more online'`.
 */

const users = ['mockIng99', 'J0eyPunch', 'glassedFer'];

function displayUsers(arr){
    const count = users.length;
    let online;
    if (count === 1) {
        online = `${arr[0]} is online`;
    } else if (count ===2) {
        online = `${arr[0]},${arr[1]} are online`;
    } else {
        online = `${arr[0]}, ${arr[1]} and ${count-2} more are online `
    }
    return online;
}

console.log(displayUsers(users));
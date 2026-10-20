const fakeRequestCallback = (url, success, failure) => {
    const delay = Math.floor(Math.random() * 4500) + 500;
    setTimeout(() => {
        if (delay > 4000) {
            failure("Connection Timout :(")
        }
        else {
            success(`Here is your fake data from ${url}`)
        }
    }, delay)
}

const fakeRequestPromise = (url) => {
    return new Promise((resolve, reject) => {
        const delay = Math.floor(Math.random() * (4500)) + 500
        setTimeout(() => {
            if (delay > 4000) {
                reject("Connection Timout :(")
            }
            else {
                resolve(`Here is your fake data from ${url}`)
            }
        }, delay)
    })
}

fakeRequestPromise('google.com/page1')
    .then((data) => {
        console.log('PROMISE RESOLVED (PAGE 1)!');
        console.log(data);
        return fakeRequestPromise('google.com/page2'); // Return the next promise
    })
    .then((data) => {
        console.log('PROMISE RESOLVED (PAGE 2)!');
        console.log(data);
        return fakeRequestPromise('google.com/page3'); // Return the next promise
    })
    .then((data) => {
        console.log('PROMISE RESOLVED (PAGE 3)!');
        console.log(data);
    })
    .catch((err) => {
        // This single block catches a rejection from ANY of the promises above
        console.log('PROMISE REJECTED!');
        console.log('OH NO, ERROR:', err);
    });


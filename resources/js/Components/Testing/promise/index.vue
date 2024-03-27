<script setup>
const checkpromiseAll = () => {
    const promise1 = new Promise((resolve, reject) =>
        setTimeout(() => resolve("Promise 1 resolved"), 1000)
    );
    const promise2 = new Promise(
        (resolve, reject) =>
            setTimeout(() => resolve("Promise 2 resolved"), 2000)

        // setTimeout(() => reject("Promise 2 resolved"), 2000)
    );

    Promise.all([promise1, promise2])
        .then((values) => {
            console.log("inside promise all success");
            console.log(values); // Output: ['Promise 1 resolved', 'Promise 2 resolved']
        })
        .catch((error) => {
            console.log("inside promise all fail");

            console.error(error);
        });
};

const checkpromiseRace = () => {
    const promise1 = new Promise((resolve, reject) =>
        setTimeout(() => reject("Promise 1 resolved"), 2000)
    );
    const promise2 = new Promise((resolve, reject) =>
        setTimeout(() => resolve("Promise 2 resolved"), 1000)
    );

    Promise.race([promise1, promise2])
        .then((value) => {
            console.log("inside promise race success");

            console.log(value); // Output: 'Promise 2 resolved'
        })
        .catch((error) => {
            console.log("inside promise race fail");

            console.error(error);
        });
};
</script>
<template>
    Hy from promise test, it just to test promise
    <br />
    <button @click="checkpromiseAll()">check promise all</button>
    <ul>
        <li>
            wait for all to finish and sb ka result ek array main then main ata
        </li>
        <li>eik b fail ho tu catch main aa jata</li>
    </ul>
    <br />
    <button @click="checkpromiseRace()">check promise race</button>
    <ul>
        <li>
            Dont wait for all, koi b pehly resolve ya reject ho jai tu bus. 1
            johni resolve hota yeh then main aa jata
        </li>
        <li>eik b fail ho tu catch main aa jata</li>
    </ul>
</template>

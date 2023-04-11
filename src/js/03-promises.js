import Notiflix from 'notiflix';

const delayValue = document.querySelector('[name="delay"]');
const stepValue = document.querySelector('[name="step"]');
const amountValue = document.querySelector('[name="amount"]');
const btnSubmit = document.querySelector('[type="submit"]');

btnSubmit.addEventListener('click', (event) => {
  event.preventDefault();
  const delay = Number(delayValue.value);
  const step = Number(stepValue.value);
  const amount = Number(amountValue.value);

  for (let i = 1; i <= amount; i += 1) {
    const position = i;
    const currentDelay = delay + step * (i - 1);
    const promise = createPromise(position, currentDelay);
    promise
      .then(({ position, delay }) => {
        Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
      })
      .catch(({ position, delay }) => {
        Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
      });
  }
});

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;
    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
}

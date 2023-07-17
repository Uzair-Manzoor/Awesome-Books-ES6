const dateLine = document.querySelector('.dayDate');
const navBar = document.querySelector('nav');
const displayDate = () => {
  const stringDate = new Date();
  const date = stringDate.toLocaleDateString('en-us', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
  const time = stringDate.toLocaleTimeString();
  dateLine.innerHTML = `${date} ${time}`;
  navBar.appendChild(dateLine);
};
export default displayDate;
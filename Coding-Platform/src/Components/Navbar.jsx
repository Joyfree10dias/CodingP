import '../App.css';

const Navbar = () => {

  return (
    <nav className="navigation">
    <div id="navigation--dropdown"></div>
    <ul className="navigation__list">
      <li className="list--item">
        <a style={{color:'white'}} href="#papers">LOGO</a>
      </li>

      <li className="list--item">
        <a style={{color:'white'}} href="#papers">Problems</a>
        <ul className="item--dropdown">
          <li><a href="#confidential">Confidential</a></li>
          <li><a href="#privileged">Privileged</a></li>
          <li><a href="#secret">Secret</a></li>
        </ul>
      </li>

      <li className="list--item">
        <a style={{color:'white'}} href="#items">Contests</a>
        <ul className="item--dropdown">
          <li><a href="#peculiar">Peculiar</a></li>
          <li><a href="#random">Random</a></li>
        </ul>
      </li>

      <li className="list--item">
        <a style={{color:'white'}} href="#documents">Discussions</a>
        <ul className="item--dropdown">
          <li><a href="#electronic">Electronic</a></li>
          <li><a href="#imagined">Imagined</a></li>
          <li><a href="#madeup">Made up</a></li>
          <li><a href="#printed">Printed</a></li>
        </ul>
      </li>

      <li className="list--item">
        <a style={{color:'white'}} href="#items">Files</a>
        <ul className="item--dropdown">
          <li><a href="#encrypted">Encrypted</a></li>
          <li><a href="#compromised">Compromised</a></li>
          <li><a href="#safe">Safe</a></li>
          <li><a href="#secure">Secure</a></li>
        </ul>
      </li>
    </ul>

    <div className='Sign-In-Button' style={{paddingLeft:'15px',paddingRight:'15px', borderRadius:'1rem'}}>
    <a href="" style={{fontSize:'18px'}}>Sign in</a>
    </div>
  </nav>
  )
}

const items = document.querySelectorAll('.list--item');

function handleClick(e) {
  e.preventDefault();
  const { textContent: textMain } = this.querySelector('a');

  const { textContent: textTarget } = e.target;

  let textSpan = 'navigation bar';
  if (e.target.tagName === 'A' && textTarget === textMain) {
    textSpan = textTarget;
  }
  if (e.target.tagName === 'A' && textTarget !== textMain) {
    textSpan = `${textTarget} ${textMain}`;
  }

  document.querySelector('span').textContent = textSpan.toLowerCase();
}
items.forEach(item => item.addEventListener('click', handleClick));


const dropdownBackground = document.querySelector('#navigation--dropdown');

function handleEnter() {
  const dropdown = this.querySelector('.item--dropdown');
  const { offsetWidth: width, offsetHeight: height } = dropdown;

  const rectangle = dropdown.getBoundingClientRect();
  const { top, left } = rectangle;

  dropdownBackground.classList.add('active');
  dropdown.classList.add('active');

  dropdownBackground.style.width = `${width}px`;
  dropdownBackground.style.height = `${height}px`;
  dropdownBackground.style.top = `${top}px`;
  dropdownBackground.style.left = `${left - 145}px`;
  console.log(items);
  items.style.color = '#32373d'
}

function handleExit() {
  // find the nested ul
  const dropdown = this.querySelector('.item--dropdown');
  dropdown.classList.remove('active');
  dropdownBackground.classList.remove('active');
}

items.forEach(item => item.addEventListener('mouseenter', handleEnter));
items.forEach(item => item.addEventListener('mouseleave', handleExit));

export default Navbar
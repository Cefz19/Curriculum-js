const Header = () => {
  const view = `
    <header class="Header-main">
        <div class="logo">
          <a href="#/">Porfolio</a>
        </div>
        <nav class="navbar">
            <a href="#/" class="active">Home</a>
            <a href="#/about" >About</a>
            <a href="#/skill" >Skill</a>
            <a href="#/porfolio" >Porfolio</a>
            <a href="#/contact" >Contact</a>
        </nav>
    </header>
    `;
  return view;
};

export default Header;

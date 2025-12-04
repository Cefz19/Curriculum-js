const Header = () => {
  const view = `
    <header class="Header-main" id="header">
        <div class="logo">
          <a href="#">Porfolio</a>
        </div>
        <div class="Header-nav">
            <a href="/" class="active">Home</a>
            <a href="#/about" >About</a>
            <a href="#/skill" >Skill</a>
            <a href="#" >Porfolio</a>
            <a href="#" >Contact</a>
        </div>
    </header>
    `;
  return view;
};

export default Header;

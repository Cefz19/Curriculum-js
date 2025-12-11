const Header = () => {
  const view = `
    <header>
        <section class="logo">
          <a href="#/">Portfolio</a>
        </section>
        <nav class="navbar">
            <a href="#home" class="active">Home</a>
            <a href="#about" >About</a>
            <a href="#services" >Services</a>
            <a href="#skill" >Skill</a>
            <a href="#projects" >Projects</a>
            <a href="#contact" >Contact</a>
        </nav>
    </header>
    `;
  return view;
};

export default Header;

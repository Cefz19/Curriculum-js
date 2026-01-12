
const Header = () => {
  const view = `
    <div class="header__nav">
        <section class="logo">
          <a href="#pdf">Portfolio</a>
        </section>
        <nav class="navbar">
            <a href="#home" class="active">Home</a>
            <a href="#about" >About</a>
            <a href="#services" >Services</a>
            <a href="#skill" >Skill</a>
            <a href="#projects" >Projects</a>
            <a href="#contact" >Contact</a>
        </nav>
    </div>
    `;
  return view;
};

export default Header;

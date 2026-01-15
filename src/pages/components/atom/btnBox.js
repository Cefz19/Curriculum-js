import { LinkData } from "../../../data/atomData/linkData";

const LinkBox = (index) => {
  const item = LinkData[index];

  if (!item) return '';

  return `<a href="${item.link}" class="btn-box">${item.title}</a>`;
};

export default LinkBox;

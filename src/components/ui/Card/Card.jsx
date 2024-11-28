import style from "./Card.module.css";

const Card = ({
  title,
  content,
  tags,
  image = "/placeholder-img.png",
  published,
}) => {
  return (
    <div className={style.card}>
      <figure className={style.thumb__container}>
        <img src={image} alt={title} className={style.thumb} />
      </figure>
      <div className={style.content}>
        <h1 className={style.title}>Titolo del post</h1>
        <ul className="flex">
          {tags.map((tag, i) => (
            <li key={i} className={tag}>
              #{tag}
            </li>
          ))}
        </ul>
        <p className={style.description}>
          {" "}
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate
          laborum sed, quas atque perspiciatis ex sint similique veritatis dolor
          voluptatum veniam. Voluptate possimus unde veniam dolorem praesentium,
          quaerat et autem.
        </p>
        <button className={style.btn}>LEGGI DI PIU</button>
      </div>
    </div>
  );
};
export default Card;

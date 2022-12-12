import classes from "./Photos.module.css";

const Photos = ({ title, id, url }) => {
  return (
<div className={classes.btn}>
<div className={classes.photo}>
      <div className={classes.photo2}>
        <div className={classes.title}>{title}</div>
        <div className={classes.id}>{id}</div>
      </div>

      <div className={classes.url}>
        <img src={url} /></div>
    </div>
</div>
  );
};

export default Photos;
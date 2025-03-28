import React from "react";
import { MDContent } from "./MDContent";
import styles from "./styles.module.css";

interface SchemaPropertyProps {
  title: string;
  type?: string;
  required?: boolean;
  description?: string;
  pattern?: string;
  defaultVal?: string;
}

interface TagProps {
  name: string;
}

export const SchemaProperty = ({
  title,
  type,
  required,
  description,
  pattern,
  defaultVal
}: SchemaPropertyProps) => {
  return (
    <div className="padding-vert--md">
      <div
        className="row row--align-center row--no-gutters padding-bottom--sm"
        style={{ justifyContent: "space-between" }}
      >
        <div>
          <strong>{title}</strong>
          <span className={styles.textAltColor}> {type} </span>
        </div>
        {required && <span className={styles.textErrorColor}>required</span>}
      </div>
      <p className="margin--none">
        <MDContent content={description} />
        {pattern && (
          <div className={styles.propItemWrapper}>
            <span className={styles.propItemLabel}>Pattern: </span>
            <span className={styles.propItemValue}>{pattern}</span>
          </div>
        )}
        {defaultVal && (
          <div className={styles.propItemWrapper}>
            <span className={styles.propItemLabel}>Default: </span>
            <span className={styles.propItemValue}>{defaultVal}</span>
          </div>
        )}
      </p>
    </div>
  );
};

export const Tag = ({ name }: TagProps) => {
  const bgStyle = {
    MetaMask: "#4DB6AC",
    Restricted: "#FFECB3",
    Deprecated: "#7E57C2",
  };
  return (
    <div
      className={styles.tagItem}
      style={{
        backgroundColor: `${bgStyle[name] ? bgStyle[name] : "#FFCDD2"}`,
      }}
    >
      {name}
    </div>
  );
};

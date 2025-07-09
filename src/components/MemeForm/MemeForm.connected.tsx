import React from "react";
import UnconnectedMemeForm from "./MemeForm";
import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "../../store/store";
import { update } from "../../store/current";

const MemeForm = (props) => {
  const dispatch: AppDispatch = useDispatch();

  const meme = useSelector((state: RootState) => {
    return state.current.meme;
  });

  const images = useSelector((state: RootState) => {
    return state.ressources.images;
  });

  return (
    <UnconnectedMemeForm
      {...props}
      meme={meme}
      images={images}
      onMemeChange={(m) => {
        dispatch(update(m));
      }}
    />
  );
};

export default MemeForm;

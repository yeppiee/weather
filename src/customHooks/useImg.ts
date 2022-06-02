import { useEffect, useMemo } from 'react';
import { getImgUrl } from '../services/utils';
import { Results } from '../types/Unsplash';
import { useAppSelector } from './redux';

type Props = {
  results: Results;
  total: number;
  total_pages: number;
}

const useImg = (images: Props) => {
  const { imgNum } = useAppSelector((state) => state.userSlice);
  const imgUrls = useMemo(() => {
    if (images) return getImgUrl(images.results);
    return [];
  }, [images]);

  useEffect(() => {
    const img = new Image();
    img.src = imgUrls[imgNum];
    img.onload = () => {
      document.body.style.backgroundImage = `url(${imgUrls[imgNum]})`;
    };
  }, [imgNum, imgUrls]);
};

export default useImg;

interface Props {
  params: { id: number; photoid: number };
}

const PhotoDetaiPage = ({ params: { id, photoid } }: Props) => {
  return (
    <div>
      PhotoDetaiPage {id} {photoid}
    </div>
  );
};

export default PhotoDetaiPage;

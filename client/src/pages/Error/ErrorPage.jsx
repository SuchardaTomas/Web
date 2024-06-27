import errorImage from './error.png'

export default function ErrorPage() {
  return (
    <>
      <div className="container flex justify-center flex-col items-center">
        <img src={errorImage} />
        <p className='text-2xl'>Jejda! Asi jsi zabloudil do jiného světa</p>
      </div>
    </>
  );
}

import Link from 'next/link'

export default function Home() {

  const boxMenu = `grid h-[100px] font-semibold  text-white rounded-md px-5 w-[200px] py-2 flex-wrap bg-blue-600 content-end mx-auto`
  return (
    <>
    <div className="w-screen h-screen flex">
      <div className="mx-auto flex flex-col my-auto">
      <h1 className="mx-auto text-4xl font-bold mb-[50px] ">Link Generator</h1>
      <div className="flex gap-[10px] flex-wrap mx-auto w-[830px]">
        <Link href={`/wa-link-generator`} className={boxMenu}>
         <p>Wa.me Generator</p>
        </Link>
        <Link href={`/gdrive-download-link-generator`} className={boxMenu}>
        <p>GDrive Download Link Generator</p>
        </Link>
        {/* <div className={boxMenu}>
          <p>QRCode Generator</p>
        </div> */}
      </div>
      </div>
    </div>
    </>
  );
}

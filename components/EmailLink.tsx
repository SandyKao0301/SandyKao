'use client'
export default function EmailLink({ className='' }:{ className?: string }){
  const user = "yuhsuan.kao21";
  const domain = "gmail.com";
  const addr = `${user}@${domain}`;
  return <a className={className} href={`mailto:${addr}`}>{addr}</a>
}
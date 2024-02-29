export default function InformationLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
      <div className="mx-auto my-[5rem] max-w-[500px]">
        {children}
      </div>
    )
  }
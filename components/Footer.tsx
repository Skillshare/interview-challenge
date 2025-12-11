export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black py-6 mt-auto">
      <div className="text-center text-white text-sm">
        skillshare code challenge {currentYear}
      </div>
    </footer>
  );
}


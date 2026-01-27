import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import BookInfo from "@/components/BookInfo";
import AgeAppropriateness from "@/components/AgeAppropriateness";
import FlagsTable from "@/components/FlagsTable";

const Index = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />
      <div className="flex flex-1">
        <Sidebar />
        <main className="flex-1 p-8">
          <BookInfo
            title="10,000 Days of Thunder"
            author="Philip Caputo"
            coverUrl="https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1348808744i/588347.jpg"
          />
          <AgeAppropriateness />
          <FlagsTable />
        </main>
      </div>
    </div>
  );
};

export default Index;

import { getBlog } from "@/lib/api"
import Image from "next/image"
import Link from "next/link"
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";


async function getBlogs() {
  const data = await getBlog();
  return data?.data.data || [];
}
export default async function BlogListPage() {
  const blogs = await getBlogs(); // ✅ Server-side await
  return (
    <div>
      <div className="relative w-full h-96">
        <Image src={"/image/blog/bg.jpg"} alt="Blog"  fill className="object-cover"/>
        <h5 className="absolute inset-0 flex items-center justify-center text-3xl font-bold text-white bg-black/30">
          Review nước hoa
        </h5>
      </div>

      <div className="flex flex-wrap gap-4 px-2 py-3 ms-[100px] mt-[20px]">
        <button
          className="text-sm px-5 py-2 border-2 border-[#9C8679] rounded-2xl font-semibold bg-white text-black hover:bg-[#9C8679] hover:text-white transition duration-300">
          Kinh nghiệm chọn nước hoa
        </button>
        <button
          className="text-sm px-5 py-2 border-2 border-[#9C8679] rounded-2xl font-semibold bg-white text-black hover:bg-[#9C8679] hover:text-white transition duration-300" >
          Review nước hoa
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-5 py-5">
        {blogs.map((item: any) => (
          <Link href={`/blog/${item.slug}`} key={item.slug} className="group">
            <div className="rounded-lg overflow-hidden shadow hover:shadow-lg bg-white transition">
              <div className="relative w-full h-60 overflow-hidden">
                <Image
                  src={item.thumbnail}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              <div className="p-4">
                <h3 className="font-bold text-lg mb-2 line-clamp-2">{item.title}</h3>
                <p className="text-gray-600 text-sm line-clamp-3">{item.description}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>

      <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationLink href="#">1</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#" isActive>2
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#">3</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#">4</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationEllipsis />
        </PaginationItem>
        <PaginationItem>
          <PaginationNext href="#" />
        </PaginationItem>
      </PaginationContent>
    </Pagination>


    </div>
  )
}

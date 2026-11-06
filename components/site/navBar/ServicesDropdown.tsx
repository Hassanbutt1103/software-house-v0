// "use client"

// import Link from "next/link"

// interface ServiceItem {
//   title: string
//   description: string
//   href: string
// }

// interface ServiceCategory {
//   category: string
//   items: ServiceItem[]
// }

// const servicesData: ServiceCategory[] = [
//   {
//     category: "Digital Services",
//     items: [
//       {
//         title: "Web Development",
//         description: "Custom and scalable web applications built with modern tech.",
//         href: "/services/Digital-services/webDev",
//       },
//       {
//         title: "Mobile Apps",
//         description: "Cross-platform mobile apps for iOS and Android.",
//         href: "/services/Digital-services/mobileApps",
//       },
//       {
//         title: "UI/UX Design",
//         description: "User-centered design that creates intuitive experiences.",
//         href: "/services/Digital-services/ui-ux",
//       },
//     ],
//   },
//   {
//     category: "Cloud Services",
//     items: [
//       {
//         title: "Cloud Infrastructure",
//         description: "Secure and scalable cloud setup & DevOps solutions.",
//         href: "/services/Cloud-services/cloud-infra",
//       },
//       {
//         title: "Server Management",
//         description: "24/7 server monitoring, performance optimization & security.",
//         href: "/services/Cloud-services/server-mgmt",
//       },
//       {
//         title: "Cloud Migration",
//         description: "Seamless transfer of your applications to high-speed cloud.",
//         href: "/services/Cloud-services/cloud-migration",
//       },
//     ],
//   },
// ]

// export function ServicesDropdown() {
//   return (
//     <div className="fixed left-0 right-0 top-14 w-full bg-black/95 text-white border-b border-white/10 shadow-2xl backdrop-blur-xl transition-all duration-300 z-50">
//       <div className="max-w-7xl mx-auto p-6 md:p-8">
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//           {servicesData.map((cat, idx) => (
//             <div key={idx} className="flex flex-col gap-4">
//               {/* Category Heading */}
//               <div className="flex items-center gap-2 border-b border-white/10 pb-2">
//                 <span className="h-2 w-2 rounded-full bg-primary" />
//                 <h3 className="text-lg font-bold text-white tracking-wide uppercase text-sm">
//                   {cat.category}
//                 </h3>
//               </div>

//               {/* Category Items */}
//               <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
//                 {cat.items.map((service, itemIdx) => (
//                   <Link
//                     key={itemIdx}
//                     href={service.href}
//                     className="p-3 rounded-lg bg-white/5 hover:bg-white/10 border border-white/5 hover:border-white/20 transition-all group"
//                   >
//                     <h4 className="font-semibold text-sm text-white group-hover:text-primary transition-colors">
//                       {service.title}
//                     </h4>
//                     <p className="text-xs text-gray-400 mt-1 leading-relaxed">
//                       {service.description}
//                     </p>
//                   </Link>
//                 ))}
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   )
// }


"use client"

import Link from "next/link"
import { servicesData } from "./Menudata"

export function ServicesDropdown() {
  return (
    <div className="fixed left-0 right-0 top-14 w-full bg-black/95 text-white border-b border-white/10 shadow-2xl backdrop-blur-xl transition-all duration-300 z-50">
      <div className="max-w-7xl mx-auto p-6 md:p-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {servicesData.map((cat, idx) => (
            <div key={idx} className="flex flex-col gap-4">
              {/* Category Heading */}
              <div className="flex items-center gap-2 border-b border-white/10 pb-2">
                <span className="h-2 w-2 rounded-full bg-primary" />
                <h3 className="text-sm font-bold text-white tracking-wide uppercase">
                  {cat.category}
                </h3>
              </div>

              {/* Category Items */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {cat.items.map((item, itemIdx) => (
                  <Link
                    key={itemIdx}
                    href={item.href}
                    className="p-3 rounded-lg bg-white/5 hover:bg-white/10 border border-white/5 hover:border-white/20 transition-all group"
                  >
                    <h4 className="font-semibold text-sm text-white group-hover:text-primary transition-colors">
                      {item.title}
                    </h4>
                    <p className="text-xs text-gray-400 mt-1 leading-relaxed">
                      {item.description}
                    </p>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
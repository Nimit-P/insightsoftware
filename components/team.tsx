// const members = [
//     {
//         name: 'Méschac Irung',
//         role: 'Creator',
//         avatar: 'https://avatars.githubusercontent.com/u/47919550?v=4',
//     },
//     {
//         name: 'Théo Balick',
//         role: 'Frontend Dev',
//         avatar: 'https://avatars.githubusercontent.com/u/68236786?v=4',
//     },
//     {
//         name: 'Glodie Lukose',
//         role: 'Frontend Dev',
//         avatar: 'https://avatars.githubusercontent.com/u/99137927?v=4',
//     },
//     {
//         name: 'Bernard Ngandu',
//         role: 'Backend Dev',
//         avatar: 'https://avatars.githubusercontent.com/u/31113941?v=4',
//     },
// ]

// export default function TeamSection() {
//     return (

//             <div className="mx-auto max-w-3xl px-8 lg:px-0">
//                 <h2 className="mb-6 text-3xl font-bold md:mb-10 lg:text-4xl text-center text-[#343a40]">Our team</h2>

//                 <div>
//                     <div className="grid grid-cols-2 gap-5 border-t py-6 md:grid-cols-4">
//                         {members.map((member, index) => (
//                             <div key={index}>
//                                 <div className="bg-background size-20 rounded-full border p-0.5 shadow shadow-zinc-950/5">
//                                     <img className="aspect-square rounded-full object-cover" src={member.avatar} alt={member.name} height="460" width="460" loading="lazy" />
//                                 </div>
//                                 <span className="mt-2 block text-sm">{member.name}</span>
//                                 <span className="text-muted-foreground block text-xs">{member.role}</span>
//                             </div>
//                         ))}
//                     </div>
//                 </div>
//             </div>
//     )
// }

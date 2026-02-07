// import { Card, CardContent } from "@/components/ui/card";
// import { Button } from "@/components/ui/button";
// import { Linkedin, Mail } from "lucide-react";
// import ceoImage from "@/assets/team-ceo.jpg";
// import ctoImage from "@/assets/team-cto.jpg";
// import leadDevImage from "@/assets/team-lead-dev.jpg";
// import vpOpsImage from "@/assets/team-vp-ops.jpg";
// import Image from "next/image";
// import Link from "next/link";

// const TeamSection = () => {
//   const teamMembers = [
//     {
//       name: "Anjali Agarwal",
//       role: "Chief Executive Officer",
//       bio: "20+ years of enterprise technology leadership, specializing in digital transformation strategies that deliver measurable business outcomes.",
//       image: ceoImage,
//       expertise: ["Digital Strategy", "Enterprise Architecture", "Business Transformation"]
//     },
//     {
//       name: "Sarah Chen",
//       role: "Chief Technology Officer",
//       bio: "Former AWS Solutions Architect with deep expertise in cloud migration, data engineering, and AI/ML implementations at scale.",
//       image: ctoImage,
//       expertise: ["Cloud Architecture", "AI/ML", "Data Engineering"]
//     },
//     {
//       name: "David Kim",
//       role: "Lead Solutions Architect",
//       bio: "Full-stack developer turned architect, passionate about building scalable, modern applications using cutting-edge technologies.",
//       image: leadDevImage,
//       expertise: ["Microservices", "DevOps", "Application Architecture"]
//     },
//     {
//       name: "Angela Thompson",
//       role: "VP of Operations",
//       bio: "Operations expert focused on process optimization, team development, and ensuring seamless project delivery for our clients.",
//       image: vpOpsImage,
//       expertise: ["Project Management", "Process Optimization", "Team Leadership"]
//     }
//   ];

//   return (
//     <section id="team" className="py-20 bg-background">
//       <div className="container mx-auto px-4">
//         {/* Section Header */}
//         <div className="text-center mb-16">
//           <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
//             Meet Our Expert Team
//           </h2>
//           <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
//             Our leadership team combines decades of experience in technology,
//             consulting, and innovation to deliver exceptional results for our clients.
//           </p>
//         </div>

//         {/* Team Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
//           {teamMembers.map((member, index) => (
//             <Card key={index} className="group hover:shadow-strong transition-all duration-300 hover:-translate-y-2 bg-card border-border flex items-end">
//               <CardContent className="p-6 text-center">
//                 {/* Profile Image */}
//                 {/* <div className="relative mb-6">
//                   <div className="w-32 h-32 mx-auto rounded-full overflow-hidden shadow-medium">
//                     <Image
//                       src={member.image}
//                       alt={member.name}
//                       className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
//                     />
//                   </div>
//                 </div> */}

//                 {/* Member Info */}
//                 <h3 className="text-xl font-bold text-foreground mb-2">
//                   {member.name}
//                 </h3>
//                 <p className="text-secondary-foreground font-semibold mb-4">
//                   {member.role}
//                 </p>
//                 <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
//                   {member.bio}
//                 </p>

//                 {/* Expertise Tags */}
//                 <div className="mb-6">
//                   <div className="flex flex-wrap gap-2 justify-center">
//                     {member.expertise.map((skill) => (
//                       <span
//                         key={skill}
//                         className="px-3 py-1 bg-muted text-muted-foreground text-xs rounded-full"
//                       >
//                         {skill}
//                       </span>
//                     ))}
//                   </div>
//                 </div>

//                 {/* Social Links */}
//                 <div className="flex gap-3 justify-center">
//                   <Button
//                     variant="outline"
//                     size="sm"
//                     className="p-2 hover:bg-accent hover:text-accent-foreground"
//                   >
//                     <Linkedin className="h-4 w-4" />
//                   </Button>
//                   <Button
//                     variant="outline"
//                     size="sm"
//                     className="p-2 hover:bg-accent hover:text-accent-foreground"
//                   >
//                     <Mail className="h-4 w-4" />
//                   </Button>
//                 </div>
//               </CardContent>
//             </Card>
//           ))}
//         </div>

//         {/* CTA Section */}
//         <div className="text-center">
//           <h3 className="text-2xl font-bold text-foreground mb-4">
//             Ready to work with industry experts?
//           </h3>
//           <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
//             Our team is ready to discuss your project and provide tailored solutions
//             that drive your business forward.
//           </p>
//         <Link href='/contact'>
//           <Button size="lg" className="bg-primary hover:bg-primary-light px-8 py-4 text-lg font-semibold">
//             Schedule a Consultation
//           </Button>
//         </Link>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default TeamSection;
import {
  LockClosedIcon,
  FireIcon,
  AcademicCapIcon,
  BoltIcon
} from "@heroicons/react/20/solid";

const features = [
  {
    name: "Ignite",
    description:
      "tackles complex challenges facing children in disadvantaged communities through the transformative power of education.",
    icon: FireIcon,
  },
  {
    name: "Catalyse",
    description:
      "harnesses the power of volunteers to facilitate change in environmental, animal welfare, and other civic initiatives.",
    icon: BoltIcon,
  },
  {
    name: "Bhumi Fellowship",
    description:
      "Centered around the holistic development of children, the Bhumi Fellowship focuses its efforts on Whole-School Transformation.",
    icon: AcademicCapIcon,
  },
];

export default function Example() {
  return (
    <div className="overflow-hidden bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pr-8 lg:pt-4">
            <div className="lg:max-w-lg">
              <h2 className="text-base font-semibold leading-7 text-indigo-600">
                How Change Happens
              </h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                We are Driven by Optimism
              </p>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                At Bhumi, we strive for meaningful change. Through volunteering,
                we aim to build a society that empowers every individual to
                reshape the conversation with their voices and stories. Among
                grassroots NGOs in India, Bhumi has a strong reputation for
                success. We are a leading NGO in India focusing on two areas:
                Education & Volunteer.
              </p>
              <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                {features.map((feature) => (
                  <div key={feature.name} className="relative pl-9">
                    <dt className="inline font-semibold text-gray-900">
                      <feature.icon
                        className="absolute left-1 top-1 h-5 w-5 text-indigo-600"
                        aria-hidden="true"
                      />
                      {feature.name}
                    </dt>{" "}
                    <dd className="inline">{feature.description}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
          <img
            src="https://images.unsplash.com/photo-1542810634-71277d95dcbb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cG9vciUyMGNoaWxkcmVufGVufDB8fDB8fHww&w=1000&q=80"
            alt="Happy children"
            className="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0"
            width={2432}
            height={1442}
          />
        </div>
      </div>
    </div>
  );
}

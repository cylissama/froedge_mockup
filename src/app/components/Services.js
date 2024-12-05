export default function Services() {
    const services = [
      {
        title: "Machining",
        description:
          "We have a dedicated facility in Glasgow, KY with CNC, wire EDM, and many other capabilities. We handle jobs large and small, from farmers to automotive plants.",
      },
      {
        title: "Parts & Supply",
        description:
          "Our warehouse contains tens of thousands of products which we sell online through Froedge.shop, at our Tompkinsville facility, and via other online channels.",
      },
      {
        title: "Lumber Handling Equipment",
        description:
          "We are one of the few American manufacturers of assembly line and automation equipment for the lumber handling industry.",
      },
      {
        title: "Service & Repair",
        description:
          "Our Tompkinsville, KY facility services small and large businesses as well as state and local government in both middle Tennessee and southern Kentucky.",
      },
    ];
  
    return (
      <section className="services">
        {/* Move heading above the grid */}
        <div className="services-header">
          <h1>
            Since 1962, Froedge Machine has helped global customers meet unique
            industrial needs.
          </h1>
        </div>
        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <h2 className="service-title">{service.title}</h2>
              <p className="service-description">{service.description}</p>
            </div>
          ))}
        </div>
      </section>
    );
  }
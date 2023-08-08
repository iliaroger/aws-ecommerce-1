import ContentWrapper from "../ContentWrapper";

export default function Page() {
  return (
    <section>
      <ContentWrapper header="Pages and layouts">
        <p>
          The root layout is a unique component which is rendered in every child
          segment. It basically serves as a component which has shared
          components for every child segment i.e. navbar component which is
          basically present in every modern application. The layout component is
          a single instance across all child components and will not rerender on
          segment change. If you need a component that can be wrapped around
          every child segment, you can use the template component, which will
          create new instances on every component its rendered on.
        </p>
      </ContentWrapper>
    </section>
  );
}

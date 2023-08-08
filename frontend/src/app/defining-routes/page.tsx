import ContentWrapper from "../ContentWrapper";

export default function Page() {
  return (
    <ContentWrapper header="Defining Routes">
      <p>
        In order to create a new segment from the app directory, simply create a
        folder with a page.tsx/jsx file in it. Page are server components by
        default.
      </p>
    </ContentWrapper>
  );
}

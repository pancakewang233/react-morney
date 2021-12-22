import { FormTypeSection } from "./formTypeSection";
import { InputSection } from "./inputSection";
import { NumberSection } from "./numberSection";
import { TagSection } from "./TagSection/tagSection";
import axios from "axios";
import styled from "styled-components";

const MonWrapper = styled.div`
  border: 1px solid blue;
  display: flex;
  flex-direction: column;
`
const Money = () => {
  const getData = async () => {
    const res = await axios.get("/api");
    console.log("user", res);
  };
  return (
    <MonWrapper onClick={getData}>
      <TagSection />
      <InputSection />
      <FormTypeSection />
      <NumberSection />
    </MonWrapper>
  );
};

export { Money };

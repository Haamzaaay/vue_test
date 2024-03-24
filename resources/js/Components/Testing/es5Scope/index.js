import { ref } from "vue";

export const testObjwithoutRef = {
    name: "testObjWithoutRef",
    testVal: "initial test value",
};
export const testString = "testString";
export let count = 0;
export const functionaddcount = ()=>{
    count++;
}
export const testObjwithRef = ref({ ...testObjwithoutRef });

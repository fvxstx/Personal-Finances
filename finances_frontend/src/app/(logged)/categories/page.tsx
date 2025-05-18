import Title from "@/components/Default/Title";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { TableCategories } from "./components/table/TableCategories";
import { NewCategoryButton } from "./components/NewCategoryButton";

export default async function CategoriesPage() {
  return (
    <main className="flex flex-col items-start w-full py-4 px-32 mt-10 gap-14">
      <Tabs defaultValue="expenses" className="w-full">
        <div className="flex justify-between w-full items-center">
          <Title name="Categorias" />
          <TabsContent value="expenses" className="flex-0">
            <NewCategoryButton typeCategory="expenses" />
          </TabsContent>
          <TabsContent value="incomes" className="flex-0">
            <NewCategoryButton typeCategory="incomes" />
          </TabsContent>
        </div>
        <div className="p-4 w-full bg-white rounded-xl shadow-md mt-10">
          <TabsList className="w-full flex gap-16 bg-white">
            <TabsTrigger
              value="expenses"
              className={`cursor-pointer text-principal font-bold text-xl rounded-none data-[state=active]:pb-3 data-[state=active]:text-red-500 data-[state=active]:shadow-none data-[state=active]:border-t-0 data-[state=active]:border-l-0 data-[state=active]:border-r-0 data-[state=active]:border-b-[3px] data-[state=active]:border-red-500 data-[state=active]:bg-white`}
            >
              Despesas
            </TabsTrigger>
            <TabsTrigger
              value="incomes"
              className={`cursor-pointer text-principal font-bold text-xl rounded-none data-[state=active]:pb-3 data-[state=active]:text-green-500 data-[state=active]:shadow-none data-[state=active]:border-t-0 data-[state=active]:border-l-0 data-[state=active]:border-r-0 data-[state=active]:border-b-[3px] data-[state=active]:border-green-500 data-[state=active]:bg-white`}
            >
              Receitas
            </TabsTrigger>
          </TabsList>

          <TabsContent value="expenses">
            <TableCategories typeCategory="expenses" />
          </TabsContent>
          <TabsContent value="incomes">
            <TableCategories typeCategory="incomes" />
          </TabsContent>
        </div>
      </Tabs>
    </main>
  );
}

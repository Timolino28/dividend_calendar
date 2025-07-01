import { supabase } from "./supabase";

// Insert data into waiting list
const joinWaitingList = async (firstName, mailAddress) => {
  const { error } = await supabase
    .from("waiting_list")
    .insert([{ first_name: firstName, mail: mailAddress }])
    .select();

  if (error) {
    console.error("Unable to insert data: ", error.message);
    throw error;
  }
};

export { joinWaitingList };

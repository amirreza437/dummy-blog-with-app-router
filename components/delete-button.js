"use client";

import { deleteBtnHandler } from "@/actions/delete-action";
import { useFormState } from "react-dom";

export default function DeleteBtn({ postId }) {
  const [formState, formAction] = useFormState(deleteBtnHandler, {});
  return (
    <form action={formAction}>
      <input name="postId" value={postId} readOnly className="hidden" />
      <button className="bg-red-500">delete</button>
    </form>
  );
}

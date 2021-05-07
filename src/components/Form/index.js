import axios from "axios"
import React from "react"
import { useForm } from "react-hook-form"
import {
  ErrorMessage,
  FormStory,
  FormStoryInput,
  FormStoryLabel,
  FormStorySubmit,
} from "./styled"

const Form = ({ reloadData, count, userSub }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm()

  const onSubmit = async data => {
    const { note, url } = data

    await axios.post(`${process.env.GATSBY_URL_FUNCTIONS}/create-story`, {
      userID: userSub,
      note,
      url,
    })

    reset({ note: "", url: "" })
    reloadData()
  }

  return (
    <FormStory onSubmit={handleSubmit(onSubmit)}>
      {count > 5 ? (
        <p>Ya tienes mucho que leer,antes de agregar más.</p>
      ) : (
        <>
          <FormStoryLabel htmlFor="note">
            Note
            <FormStoryInput
              autoComplete="off"
              name="note"
              type="text"
              placeholder="Learn Something "
              {...register("note", {
                required: true,
                maxLength: 20,
              })}
            />
            {errors?.note?.type === "required" && (
              <ErrorMessage>This field is required</ErrorMessage>
            )}
            {errors?.note?.type === "maxLength" && (
              <ErrorMessage>
                First name cannot exceed 20 characters
              </ErrorMessage>
            )}
          </FormStoryLabel>
          <FormStoryLabel htmlFor="url">
            Link
            <FormStoryInput
              autoComplete="off"
              name="url"
              type="url"
              placeholder="https://example.com"
              {...register("url", { required: true })}
            />
            {errors?.url?.type === "required" && (
              <ErrorMessage>This field is required</ErrorMessage>
            )}
          </FormStoryLabel>
          <FormStorySubmit>Save</FormStorySubmit>
        </>
      )}
    </FormStory>
  )
}

export default Form

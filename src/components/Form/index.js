import axios from "axios"
import React, { useState } from "react"
import { useForm } from "react-hook-form"
import {
  ErrorMessage,
  FormActions,
  FormStory,
  FormStoryInput,
  FormStoryLabel,
  FormStorySubmit,
} from "./styled"

const Form = ({ reloadData, count, userSub, toggleIsOn }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm()

  const [onSubmitEvent, setOnSubmitEvent] = useState(false)

  const onSubmit = async data => {
    setOnSubmitEvent(true)
    const { note, url } = data

    await axios.post(`${process.env.GATSBY_URL_FUNCTIONS}/create-story`, {
      userID: userSub,
      note,
      url,
    })

    reset({ note: "", url: "" })
    reloadData()
    toggleIsOn()
    setOnSubmitEvent(false)
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
              <ErrorMessage>Note is required</ErrorMessage>
            )}
            {errors?.note?.type === "maxLength" && (
              <ErrorMessage>Note cannot exceed 20 characters</ErrorMessage>
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
              <ErrorMessage>This url is required</ErrorMessage>
            )}
          </FormStoryLabel>
          <FormActions>
            {onSubmitEvent ? (
              "Loading..."
            ) : (
              <FormStorySubmit>Save</FormStorySubmit>
            )}
          </FormActions>
        </>
      )}
    </FormStory>
  )
}

export default Form

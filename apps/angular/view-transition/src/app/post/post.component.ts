import { NgOptimizedImage } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  computed,
  input,
} from '@angular/core';
import { ThumbnailHeaderComponent } from '../blog/thumbnail-header.component';
import { fakeTextChapters, posts } from '../data';
import { PostHeaderComponent } from './post-header.component';

@Component({
  selector: 'post',
  standalone: true,
  imports: [ThumbnailHeaderComponent, NgOptimizedImage, PostHeaderComponent],
  template: `
    <div class="w-full max-w-[800px]">
      <img [ngSrc]="post().image" alt="" width="960" height="540" />
      <h2 class="p-7 text-center text-5xl">{{ post().title }}</h2>
      <post-header [date]="post().date" class="mb-20" />
      @for (chapter of fakeTextChapter; track $index) {
        <p class="mt-6 px-3">{{ chapter }}</p>
      }
    </div>
  `,
  host: {
    class: 'flex h-full justify-center',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class PostComponent {
  id = input.required<string>();
  post = computed(() => posts.filter((p) => p.id === this.id())[0]);

  fakeTextChapter = fakeTextChapters;
}
